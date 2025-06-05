import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const CommWriteCategory = () => {
  return (
    <Select value="">
      <SelectTrigger id="category">
        <SelectValue placeholder="카테고리를 선택하세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="자유">자유</SelectItem>
        <SelectItem value="친목">친목</SelectItem>
        <SelectItem value="꿀팁">꿀팁</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CommWriteCategory;
