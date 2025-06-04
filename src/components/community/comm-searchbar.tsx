import { Search } from 'lucide-react';
import { Input } from '../ui/input';

const CommSearchBar = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4   " />
      <Input placeholder="검색어를 입력해주세요." className="pl-9" />
    </div>
  );
};

export default CommSearchBar;
