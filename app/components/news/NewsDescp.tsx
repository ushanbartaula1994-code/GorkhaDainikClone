
interface Props {
  newsDescription: string;
 
}
export default function NewsDescp({ newsDescription }: Props) {
 
;
  return (
    <div className="w-full pt-[5px] flex">
      <span className="w-1 h-[58px] bg-[#C01C28] rounded-full shrink-0 mr-3" />

      <p
        className="font-nep w-full max-w-[327px] md:max-w-[619px] text-[16px] italic 
        w- md:text-[17.6px] leading-[29.6px] md:leading-[32.56px] text-[#111110] font-normal"
      >
        {newsDescription}
      </p>
    </div>
  );
}
