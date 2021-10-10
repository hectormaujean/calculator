import { Box } from '@mui/material';

type Props = {
    children: React.ReactNode;
};

export function ScreenContainer({ children }: Props) {
    return (
        <Box sx={{ minHeight: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'end' }}>
            {children}
        </Box>
    );
}
