import { useTime } from "../../hooks/useTime";
import * as S from "../../styles/";

type Props = {};
const Clock = (props: Props) => {
  const time = useTime();
  console.log(time);
  return (
    <S.Wrapper>
      <S.Clock>
        <S.HourHand rotation={time.hour} />
        <S.MinuteHand rotation={time.minute} />
        <S.SecondHand rotation={time.second} />
      </S.Clock>
    </S.Wrapper>
  );
};
export default Clock;
