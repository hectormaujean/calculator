import { Box } from '@mui/material';

type Props = {
    children: React.ReactNode;
};

export function ButtonsRow({ children }: Props) {
    return <Box>{children}</Box>;
}
