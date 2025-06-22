import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CmField from '../../common/cm-field';
import RoomTypeSelect from './rm-content-item/room-type-select';
import TendencySlider from './rm-content-item/tendency-slider';
import CleanlinessSlider from './rm-content-item/cleanliness-slider';
import EatingSwitch from './rm-content-item/eating-switch';
import SleepPatternSelect from './rm-content-item/sleep-pattern';
import SmokingSwitch from './rm-content-item/smoking-switch';
import SleepHabitSelect from './rm-content-item/sleep-habit';
import NoiseSelect from './rm-content-item/noise';
import { Textarea } from '@/components/ui/textarea';
import DormitorySelect from './rm-content-item/dormitory';
import { Input } from '@/components/ui/input';
import { RoommateInfo } from '@/types/roommates';

const RmContent = ({
  label,
  profile,
  handleChange,
}: {
  label: string;
  profile: RoommateInfo;
  handleChange: <K extends keyof RoommateInfo>(
    key: K,
    value: RoommateInfo[K]
  ) => void;
  showMessageField?: boolean;
  isFilter?: boolean;
  handleFilterOpen?: () => void;
}) => {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg">{label}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-5 text-sm">
        <CmField label="기숙사 선택">
          <DormitorySelect
            value={profile.dormitory}
            onChange={value => handleChange('dormitory', value)}
          />
        </CmField>
        <CmField label="인실 선택">
          <RoomTypeSelect
            value={profile.roomType}
            onChange={value => handleChange('roomType', value)}
          />
        </CmField>
        <CmField label="성향">
          <TendencySlider
            value={profile.sociability}
            onChange={value => handleChange('sociability', value)}
          />
        </CmField>
        <CmField label="깔끔">
          <CleanlinessSlider
            value={profile.cleanliness}
            onChange={value => handleChange('cleanliness', value)}
          />
        </CmField>
        <EatingSwitch
          value={profile.indoorEating}
          onChange={value => handleChange('indoorEating', value)}
        />
        <SmokingSwitch
          value={profile.smoking}
          onChange={value => handleChange('smoking', value)}
        />

        <CmField label="잠버릇">
          <SleepHabitSelect
            value={profile.sleepHabit as string}
            onChange={value => handleChange('sleepHabit', value)}
          />
        </CmField>
        <CmField label="수면패턴">
          <SleepPatternSelect
            value={profile.sleepPattern}
            onChange={value => handleChange('sleepPattern', value)}
          />
        </CmField>
        <CmField label="소음">
          <NoiseSelect
            value={profile.noise as string}
            onChange={value => handleChange('noise', value)}
          />
        </CmField>
        <CmField label="카카오 오픈 채팅 링크">
          <Input
            className="text-sm"
            value={profile.kakaoOpenLink}
            onChange={e => handleChange('kakaoOpenLink', e.target.value)}
            placeholder="오픈 채팅 생성 후 복사 붙여넣기 해주세요 !"
          />
        </CmField>
        <CmField label="하고 싶은 말">
          <Textarea
            className="min-h-[100px] resize-none text-sm"
            placeholder="예시) 안녕하세요! 깔끔하고 활발한 성격입니다. 함께 즐겁게 생활할 룸메이트를 찾고 있어요 😊"
            maxLength={80}
            value={profile.message}
            onChange={e => handleChange('message', e.target.value)}
          />
          <p className="text-xs text-muted-foreground text-right">
            {profile.message?.length}/80
          </p>
        </CmField>
      </CardContent>
    </>
  );
};

export default RmContent;
