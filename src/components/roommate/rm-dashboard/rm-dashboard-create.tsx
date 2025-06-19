'use client';

import { Card } from '@/components/ui/card';
import RmRegisterForm from '../rm-content/form/rm-register-form';

const RmDashboardCreate = () => {
  return (
    <Card className="max-w-[500px]">
      <RmRegisterForm />
    </Card>
  );
};

export default RmDashboardCreate;
