import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Cmfield from '../../common/cm-field';
import RoomTypeSelect from './rm-content-item/room-type-select';
import TendencySlider from './rm-content-item/tendency-slider';
import CleanlinessSlider from './rm-content-item/cleanliness-slider';
import EatingSwitch from './rm-content-item/eating-switch';
import SleepPatternSelect from './rm-content-item/sleep-pattern';
import SmokingSwitch from './rm-content-item/smoking-switch';
import SleepHabitSelect from './rm-content-item/sleep-habit';
import NoiseSelect from './rm-content-item/noise';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RoommateProfile, RoommateProfileWithId } from './rm-type';
import { RoomMateProfileType } from '@/types/roommates';
import DormitorySelect from './rm-content-item/dormitory';
import CmField from '../../common/cm-field';
import { Input } from '@/components/ui/input';

const RmContent = ({
  label,
  profile,
  handleChange,
  showMessageField = false,
  isFilter = false,
  handleFilterOpen,
}: {
  label: string;
  profile: RoomMateProfileType;
  handleChange: <K extends keyof RoomMateProfileType>(
    key: K,
    value: RoomMateProfileType[K]
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
        <Cmfield label="기숙사 선택">
          <DormitorySelect
            value={profile.dormitory}
            onChange={value => handleChange('dormitory', value)}
          />
        </Cmfield>

        <Cmfield label="인실 선택">
          <RoomTypeSelect
            value={profile.room_type}
            onChange={value => handleChange('room_type', value)}
          />
        </Cmfield>

        <Cmfield label="성향">
          <TendencySlider
            value={profile.sociability}
            onChange={value => handleChange('sociability', value)}
          />
        </Cmfield>

        <Cmfield label="깔끔">
          <CleanlinessSlider
            value={profile.cleanliness}
            onChange={value => handleChange('cleanliness', value)}
          />
        </Cmfield>

        <EatingSwitch
          value={profile.indoor_eating}
          onChange={value => handleChange('indoor_eating', value)}
        />
        <SmokingSwitch
          value={profile.smoking}
          onChange={value => handleChange('smoking', value)}
        />

        <Cmfield label="수면패턴">
          <SleepPatternSelect
            value={profile.sleep_pattern}
            onChange={value => handleChange('sleep_pattern', value)}
          />
        </Cmfield>

        <Cmfield label="잠버릇">
          <SleepHabitSelect
            value={profile.sleep_habit}
            onChange={value => handleChange('sleep_habit', value)}
          />
        </Cmfield>

        <Cmfield label="소음">
          <NoiseSelect
            value={profile.noise}
            onChange={value => handleChange('noise', value)}
          />
        </Cmfield>

        {showMessageField && (
          <>
            <CmField label="카카오 오픈 채팅 링크">
              <Input
                className="text-sm"
                value={profile.kakao_open_link}
                onChange={e => handleChange('kakao_open_link', e.target.value)}
                placeholder="오픈 채팅 생성 후 복사 붙여넣기 해주세요 !"
              />
            </CmField>

            <Cmfield label="하고 싶은 말">
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
            </Cmfield>
          </>
        )}
      </CardContent>

      {isFilter && (
        <CardFooter className="flex gap-3 mt-5">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 block lg:hidden"
            onClick={handleFilterOpen}>
            취소
          </Button>
        </CardFooter>
      )}
    </>
  );
};

export default RmContent;
