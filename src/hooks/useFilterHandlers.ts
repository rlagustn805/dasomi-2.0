import React, { useMemo } from 'react';

// 제네릭 버전으로 수정
export const useFilterHandlers = <T extends Record<string, any>>(
  handleChange: (key: keyof T, value: any) => void
) => {
  return useMemo(
    () => ({
      // 기존 핸들러들
      handleMatchingStatusChange: (value: boolean | string) =>
        handleChange('matchingStatus' as keyof T, value),
      handleGenderChange: (value: string) =>
        handleChange('gender' as keyof T, value),
      handleMbtiChange: (value: string) =>
        handleChange('mbti' as keyof T, value),
      handleDormitoryChange: (value: string) =>
        handleChange('dormitory' as keyof T, value),
      handleRoomTypeChange: (value: string) =>
        handleChange('roomType' as keyof T, value),

      // Range 핸들러들 (Filter용)
      handleSociabilityRangeChange: (value: { min: number; max: number }) =>
        handleChange('sociabilityRange' as keyof T, value),
      handleCleanlinessRangeChange: (value: { min: number; max: number }) =>
        handleChange('cleanlinessRange' as keyof T, value),

      // 단일 값 핸들러들 (Register용)
      handleSociabilityChange: (value: number) =>
        handleChange('sociability' as keyof T, value),
      handleCleanlinessChange: (value: number) =>
        handleChange('cleanliness' as keyof T, value),

      // 공통 핸들러들
      handleIndoorEatingChange: (value: boolean) =>
        handleChange('indoorEating' as keyof T, value),
      handleSmokingChange: (value: boolean) =>
        handleChange('smoking' as keyof T, value),
      handleSleepHabitChange: (value: boolean | string) =>
        handleChange('sleepHabit' as keyof T, value),
      handleSleepPatternChange: (value: string) =>
        handleChange('sleepPattern' as keyof T, value),
      handleNoiseChange: (value: string) =>
        handleChange('noise' as keyof T, value),

      // Register 전용 핸들러들
      handleKakaoOpenLinkChange: (value: string) =>
        handleChange('kakaoOpenLink' as keyof T, value),
      handleMessageChange: (value: string) =>
        handleChange('message' as keyof T, value),

      // SignUp 전용 핸들러들 추가
      handleNicknameChange: (value: string) =>
        handleChange('nickname' as keyof T, value),
      handleDepartmentChange: (value: string) =>
        handleChange('department' as keyof T, value),
      handleStudentIdChange: (value: string) =>
        handleChange('studentId' as keyof T, value),

      // 이벤트 핸들러들
      handleInputChange:
        (key: keyof T) => (e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(key, e.target.value),
      handleTextareaChange:
        (key: keyof T) => (e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleChange(key, e.target.value),
      handleSelectChange:
        (key: keyof T) => (e: React.ChangeEvent<HTMLSelectElement>) =>
          handleChange(key, e.target.value),

      // 범용 핸들러 (어떤 필드든 사용 가능)
      handleFieldChange: (key: keyof T) => (value: any) =>
        handleChange(key, value),
    }),
    [handleChange]
  );
};
