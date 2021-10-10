import { Box } from '@mui/material';

type Props = {
    children: React.ReactNode;
};

export function ButtonsRow({ children }: Props) {
    return <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>{children}</Box>;
}
