import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';

type Props = {
    children: React.ReactNode;
};

export function ButtonsContainer({ children }: Props) {
    return (
        <Box
            sx={{
                bgcolor: grey[100],
                borderRadius: 4,
                padding: 1,
            }}
        >
            {children}
        </Box>
    );
}
