import {
  CardContent,
  CardDescription,
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
import { RoomMateProfileType } from '@/types/roommates';
import DormitorySelect from './rm-content-item/dormitory';
import CmField from '../../common/cm-field';
import { Input } from '@/components/ui/input';
import CleanlinessSliderRange from './rm-content-item/cleanliness-slider-range';
import TendencySliderRange from './rm-content-item/tendency-slider-range';
import GenderSelect from './rm-content-item/gender-select';
import MatchingStatusSwitch from './rm-content-item/matching-status-switch';
import SleepHabitSwitch from './rm-content-item/sleep-habit-switch';
import { RoomMateProfileFilter } from '@/types/roommates';
import CmMbti from '@/components/common/cm-mbti';

const RmContent = ({
  label,
  profile,
  handleChange,
  showMessageField = false,
  isFilter = false,
  handleFilterOpen,
}: {
  label: string;
  profile: RoomMateProfileFilter;
  handleChange: <K extends keyof RoomMateProfileFilter>(
    key: K,
    value: RoomMateProfileFilter[K]
  ) => void;
  showMessageField?: boolean;
  isFilter?: boolean;
  handleFilterOpen?: () => void;
}) => {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg">{label}</CardTitle>
        {isFilter && (
          <CardDescription className="text-xs mb-2">
            필요한 부분만 적용할 수 있어요!
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="flex flex-col gap-5 text-sm">
        {isFilter && (
          <MatchingStatusSwitch
            value={profile.matching_status}
            onChange={value => handleChange('matching_status', value)}
          />
        )}

        {isFilter && (
          <Cmfield label="성별 선택">
            <GenderSelect
              value={profile.gender as string}
              onChange={value => handleChange('gender', value)}
            />
          </Cmfield>
        )}

        {isFilter && (
          <CmField label="MBTI 선택">
            <CmMbti
              value={profile.mbti as string}
              onChange={value => handleChange('mbti', value)}
            />
          </CmField>
        )}

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
          {isFilter ? (
            <TendencySliderRange
              value={[
                profile.sociabilityRange!.min,
                profile.sociabilityRange!.max,
              ]}
              onChange={([min, max]) =>
                handleChange('sociabilityRange', { min, max })
              }
            />
          ) : (
            <TendencySlider
              value={profile.sociability}
              onChange={value => handleChange('sociability', value)}
            />
          )}
        </Cmfield>

        <Cmfield label="깔끔">
          {isFilter ? (
            <CleanlinessSliderRange
              value={[
                profile.cleanlinessRange!.min,
                profile.cleanlinessRange!.max,
              ]}
              onChange={([min, max]) =>
                handleChange('cleanlinessRange', { min, max })
              }
            />
          ) : (
            <CleanlinessSlider
              value={profile.cleanliness}
              onChange={value => handleChange('cleanliness', value)}
            />
          )}
        </Cmfield>

        <EatingSwitch
          value={profile.indoor_eating}
          onChange={value => handleChange('indoor_eating', value)}
        />
        <SmokingSwitch
          value={profile.smoking}
          onChange={value => handleChange('smoking', value)}
        />

        {isFilter ? (
          <SleepHabitSwitch
            value={profile.sleep_habit}
            onChange={value => handleChange('sleep_habit', value)}
          />
        ) : (
          <Cmfield label="잠버릇">
            <SleepHabitSelect
              value={profile.sleep_habit as string}
              onChange={value => handleChange('sleep_habit', value)}
            />
          </Cmfield>
        )}

        <Cmfield label="수면패턴">
          <SleepPatternSelect
            value={profile.sleep_pattern}
            onChange={value => handleChange('sleep_pattern', value)}
          />
        </Cmfield>

        <Cmfield label="소음">
          <NoiseSelect
            value={profile.noise as string}
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
