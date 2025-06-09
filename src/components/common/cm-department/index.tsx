'use client';

import { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import { cmDepartmentArr } from './cm-department-arr';

interface Props {
  value: string; // 최종 학과 이름
  onChange: (value: string) => void;
}

const CmDepartment = ({ value, onChange }: Props) => {
  const [selectedCollege, setSelectedCollege] = useState('');

  const colleges = Object.keys(cmDepartmentArr);
  const majors = selectedCollege ? cmDepartmentArr[selectedCollege] : [];

  const handleCollegeChange = (college: string) => {
    setSelectedCollege(college);
    onChange('');
  };

  const handleMajorChange = (major: string) => {
    onChange(major);
  };

  return (
    <div className="flex flex-col gap-3">
      <Select value={selectedCollege} onValueChange={handleCollegeChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="단과대학 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {colleges.map(college => (
              <SelectItem key={college} value={college}>
                {college}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        value={value}
        onValueChange={handleMajorChange}
        disabled={!selectedCollege}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="학과 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {majors.map(major => (
              <SelectItem key={major} value={major}>
                {major}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CmDepartment;
