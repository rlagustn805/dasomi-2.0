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
import MatchingStatusSelect from './rm-content-item/matching-status-select';
import { useFilterHandlers } from '@/hooks/useFilterHandlers';

const RmContent = ({
  label,
  profile,
  handleChange,
  isEdit = false,
}: {
  label: string;
  profile: RoommateInfo;
  handleChange: <K extends keyof RoommateInfo>(
    key: K,
    value: RoommateInfo[K]
  ) => void;
  showMessageField?: boolean;
  isEdit?: boolean;
  handleFilterOpen?: () => void;
}) => {
  const handlers = useFilterHandlers<RoommateInfo>(handleChange);

  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg">{label}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-6 text-sm">
        {isEdit && (
          <CmField label="매칭 상태 변경">
            <MatchingStatusSelect
              value={profile.matchingStatus as string}
              onChange={handlers.handleMatchingStatusChange}
            />
          </CmField>
        )}

        <CmField label="기숙사 선택">
          <DormitorySelect
            value={profile.dormitory}
            onChange={handlers.handleDormitoryChange}
          />
        </CmField>
        <CmField label="인실 선택">
          <RoomTypeSelect
            value={profile.roomType}
            onChange={handlers.handleRoomTypeChange}
          />
        </CmField>
        <CmField label="친목">
          <TendencySlider
            value={profile.sociability}
            onChange={handlers.handleSociabilityChange}
          />
        </CmField>
        <CmField label="깔끔">
          <CleanlinessSlider
            value={profile.cleanliness}
            onChange={handlers.handleCleanlinessChange}
          />
        </CmField>
        <EatingSwitch
          value={profile.indoorEating}
          onChange={handlers.handleIndoorEatingChange}
        />
        <SmokingSwitch
          value={profile.smoking}
          onChange={value => handleChange('smoking', value)}
        />

        <CmField label="잠버릇">
          <SleepHabitSelect
            value={profile.sleepHabit as string}
            onChange={handlers.handleSleepHabitChange}
          />
        </CmField>
        <CmField label="수면패턴">
          <SleepPatternSelect
            value={profile.sleepPattern}
            onChange={handlers.handleSleepPatternChange}
          />
        </CmField>
        <CmField label="소음">
          <NoiseSelect
            value={profile.noise as string}
            onChange={handlers.handleNoiseChange}
          />
        </CmField>
        <CmField label="카카오 오픈 채팅 링크">
          <Input
            className="text-sm"
            value={profile.kakaoOpenLink}
            onChange={e => handleChange('kakaoOpenLink', e.target.value)}
            placeholder="오픈 채팅 생성 후 링크를 붙여 넣어 주세요 !"
          />
        </CmField>
        <CmField label="하고 싶은 말">
          <Textarea
            className="min-h-[100px] resize-none text-sm"
            placeholder="예시) 안녕하세요! 깔끔하고 활발한 성격이에요. 함께 즐겁게 생활할 룸메이트를 찾고 있어요 😊"
            maxLength={80}
            value={profile.message}
            onChange={handlers.handleTextareaChange('message')}
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
