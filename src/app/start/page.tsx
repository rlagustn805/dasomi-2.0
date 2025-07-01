import AndroidStart from '@/components/start/android-start';
import IosStart from '@/components/start/ios-start';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata = {
  title: '다솜이 룸메이트 서비스 | 앱으로 시작하기',
  description: '모바일 친화적으로 이용하는 방법 안내',
};

const StartPage = () => {
  return (
    <div className="px-4 md:px-36 lg:px-44 mt-15">
      <h2 className="text-lg font-semibold">앱으로 시작하기</h2>
      <p className="text-sm text-muted-foreground">
        스마트폰에 친화적으로 이용하는 방법을 안내해드려요.
      </p>

      <Tabs defaultValue="ios-start" className="mt-5 space-y-6">
        <TabsList className="grid grid-cols-2 w-full h-auto">
          <TabsTrigger
            value="ios-start"
            className="py-2 md:py-1.5 cursor-pointer">
            아이폰
          </TabsTrigger>
          <TabsTrigger
            value="android-start"
            className="py-2 md:py-1.5 cursor-pointer">
            안드로이드
          </TabsTrigger>
        </TabsList>
        <TabsContent value="ios-start">
          <IosStart />
        </TabsContent>
        <TabsContent value="android-start">
          <AndroidStart />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StartPage;
