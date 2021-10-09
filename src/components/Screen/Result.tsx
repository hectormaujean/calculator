import { Box } from '@mui/material';

type Props = {
    result: string;
};

export function ScreenResult({ result }: Props) {
    return (
        <Box
            sx={{
                fontSize: '2.5rem',
                fontWeight: 500,
                marginBottom: 3,
                marginRight: 2,
                textAlign: 'right',
            }}
        >
            {result}
        </Box>
    );
}
