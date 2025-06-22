import CmField from '@/components/common/cm-field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CommWriteContent = () => {
  return (
    <>
      <CmField label="제목">
        <Input placeholder="제목을 입력해 주세요." />
        <p className="text-xs text-muted-foreground text-right">0/100</p>
      </CmField>
      <CmField label="내용">
        <Textarea
          className="min-h-[300px] resize-none"
          placeholder="내용을 입력해 주세요."
          maxLength={2000}
        />

        <p className="text-xs text-muted-foreground text-right">0/2000</p>
      </CmField>
    </>
  );
};

export default CommWriteContent;
