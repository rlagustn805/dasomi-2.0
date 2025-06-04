'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import { cmDepartmentArr } from './cm-department-arr';

const CmDepartment = () => {
  const [selectedCollege, setSelectedCollege] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const colleges = Object.keys(cmDepartmentArr);
  const departments = selectedCollege ? cmDepartmentArr[selectedCollege] : [];

  return (
    <div className="flex flex-col gap-3">
      <Select
        onValueChange={value => {
          setSelectedCollege(value);
          setSelectedDepartment('');
        }}>
        <SelectTrigger className="w-[200px]">
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
        value={selectedDepartment}
        onValueChange={setSelectedDepartment}
        disabled={!selectedCollege}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="학과 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {departments.map(dept => (
              <SelectItem key={dept} value={dept}>
                {dept}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CmDepartment;
