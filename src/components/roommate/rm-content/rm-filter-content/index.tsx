'use client';

import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import CmFilterField from '../../../common/cm-filter-field';
import RoomTypeSelect from './room-type-select';
import TendencySlider from './tendency-slider';
import CleanlinessSlider from './cleanliness-slider';
import EatingSwitch from './eating-switch';
import SleepPatternSelect from './sleep-pattern';
import SmokingSwitch from './smoking-switch';
import SleepHabitSelect from './sleep-habit';
import NoiseSelect from './noise';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { RoommateProfile, RoommateProfileWithId } from '../rm-type';
import DormitorySelect from './dormitory';

const RmContent = ({
  label,
  handleFilterOpen,
  showMessageField = false,
  initialProfile,
  onSubmit,
}: {
  label: string;
  handleFilterOpen?: () => void;
  showMessageField?: boolean;
  initialProfile: RoommateProfileWithId;
  onSubmit?: (profile: RoommateProfileWithId) => void;
}) => {
  const [profile, setProfile] = useState<RoommateProfileWithId>(
    initialProfile ?? {
      dormitory: '',
      room_type: '',
      sociability: 3,
      cleanliness: 3,
      smoking: false,
      indoor_eating: false,
      sleep_pattern: '',
      sleep_habit: '',
      noise: '',
      message: '',
    }
  );

  const isProfileChanged =
    JSON.stringify(profile) !== JSON.stringify(initialProfile);

  const handleChange = <K extends keyof RoommateProfile>(
    key: K,
    value: RoommateProfile[K]
  ) => {
    setProfile(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      '정말로 이 룸메이트 프로필을 삭제하시겠습니까?'
    );
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/roommates/${initialProfile.id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error ?? '삭제에 실패했습니다.');
        return;
      }

      alert('삭제가 완료되었습니다.');
      if (handleFilterOpen) handleFilterOpen(); // 필터 창 닫기 or 리스트 리프레시
    } catch (error) {
      console.error('삭제 중 오류:', error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const handleApply = async () => {
    if (onSubmit) {
      await onSubmit(profile);
    }
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg">{label}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-5 text-sm">
        <CmFilterField label="기숙사 선택">
          <DormitorySelect
            value={profile.dormitory ?? ''}
            onChange={value => handleChange('dormitory', value)}
          />
        </CmFilterField>

        <CmFilterField label="인실 선택">
          <RoomTypeSelect
            value={profile.room_type ?? ''}
            onChange={value => handleChange('room_type', value)}
          />
        </CmFilterField>

        <CmFilterField label="성향">
          <TendencySlider
            value={profile.sociability}
            onChange={value => handleChange('sociability', value)}
          />
        </CmFilterField>

        <CmFilterField label="깔끔">
          <CleanlinessSlider
            value={profile.cleanliness}
            onChange={value => handleChange('cleanliness', value)}
          />
        </CmFilterField>

        <EatingSwitch
          value={profile.indoor_eating}
          onChange={value => handleChange('indoor_eating', value)}
        />
        <SmokingSwitch
          value={profile.smoking}
          onChange={value => handleChange('smoking', value)}
        />

        <CmFilterField label="수면패턴">
          <SleepPatternSelect
            value={profile.sleep_pattern}
            onChange={value => handleChange('sleep_pattern', value)}
          />
        </CmFilterField>

        <CmFilterField label="잠버릇">
          <SleepHabitSelect
            value={profile.sleep_habit}
            onChange={value => handleChange('sleep_habit', value)}
          />
        </CmFilterField>

        <CmFilterField label="소음">
          <NoiseSelect
            value={profile.noise}
            onChange={value => handleChange('noise', value)}
          />
        </CmFilterField>

        {showMessageField && (
          <CmFilterField label="하고 싶은 말">
            <Textarea
              className="min-h-[100px] resize-none text-sm"
              placeholder="안녕하세요! 깔끔하고 활발한 성격입니다. 함께 즐겁게 생활할 룸메이트를 찾고 있어요 😊"
              maxLength={80}
              value={profile.message}
              onChange={e => handleChange('message', e.target.value)}
            />
            <p className="text-xs text-muted-foreground text-right">
              {profile.message?.length}/80
            </p>
          </CmFilterField>
        )}
      </CardContent>

      <CardFooter className="flex gap-3 mt-5">
        <Button
          size="sm"
          variant={`${initialProfile ? 'destructive' : 'outline'}`}
          className="flex-1 block lg:hidden"
          onClick={initialProfile ? handleDelete : handleFilterOpen}>
          {initialProfile ? '삭제' : '취소'}
        </Button>
        <Button
          size="sm"
          className="flex-1"
          onClick={handleApply}
          disabled={
            profile.dormitory === '' ||
            profile.room_type === '' ||
            profile.sleep_habit === '' ||
            profile.sleep_pattern === '' ||
            profile.noise === '' ||
            !isProfileChanged
          }>
          {initialProfile ? '수정' : '적용'}
        </Button>
      </CardFooter>
    </>
  );
};

export default RmContent;
