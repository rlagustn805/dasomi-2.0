import CmFilterField from '@/components/common/cm-filter-field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CommWriteContent = () => {
  return (
    <>
      <CmFilterField label="제목">
        <Input placeholder="제목을 입력해 주세요." />
        <p className="text-xs text-muted-foreground text-right">0/100</p>
      </CmFilterField>
      <CmFilterField label="내용">
        <Textarea
          className="min-h-[300px] resize-none"
          placeholder="내용을 입력해 주세요."
          maxLength={2000}
        />

        <p className="text-xs text-muted-foreground text-right">0/2000</p>
      </CmFilterField>
    </>
  );
};

export default CommWriteContent;
