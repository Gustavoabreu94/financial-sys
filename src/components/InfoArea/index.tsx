import { formatCurrentMonth } from '../../helpers/dataFilter';
import * as C from './styles';

type Props = {
    currentMonth: string;
}

export const InfoArea = ({ currentMonth }: Props) => {
    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow>
                    {"<-"}
                </C.MonthArrow>
                <C.MonthTitle>
                    {formatCurrentMonth(currentMonth)}
                </C.MonthTitle>
                <C.MonthArrow>
                    {"->"}
                </C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>

            </C.ResumeArea>
        </C.Container>
    );
}