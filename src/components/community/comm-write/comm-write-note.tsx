const CommWriteNote = () => {
  return (
    <div className="bg-muted/50 p-4 rounded-lg">
      <h3 className="font-medium mb-2">작성 시 주의사항</h3>
      <ul className="text-sm text-muted-foreground space-y-1">
        <li>• 타인을 비방하거나 불쾌감을 주는 내용은 삼가해 주세요.</li>
        <li>• 개인정보(전화번호, 주소 등)는 공개하지 마세요.</li>
        <li>• 허위 정보나 광고성 게시물은 삭제될 수 있습니다.</li>
        <li>• 건전한 커뮤니티 문화 조성에 협조해 주세요.</li>
      </ul>
    </div>
  );
};

export default CommWriteNote;
