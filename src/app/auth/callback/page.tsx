'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { LoaderCircle } from 'lucide-react';

const AuthCallbackPage = () => {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const user = session?.user;

      if (!user) {
        router.push('/login');
        return;
      }

      const { data: existingUser } = await supabase
        .from('users')
        .select('id')
        .eq('id', user.id)
        .single();

      if (existingUser) {
        router.push('/');
        router.refresh();
      } else {
        router.push('/signup');
      }
    };

    checkUser();
  }, [router, supabase]);

  return (
    <div className="flex justify-center items-center h-screen">
      <LoaderCircle className="animate-spin" color="green" />
    </div>
  );
};

export default AuthCallbackPage;
