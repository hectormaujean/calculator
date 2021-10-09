import { Box } from '@mui/material';

import { MouseEvent, useEffect, useState } from 'react';
import { evaluate, format } from 'mathjs';
import { ButtonsContainer } from '../components/Buttons/Container';
import { ButtonsRow } from '../components/Buttons/Row';
import { CalculatorButton } from '../components/Buttons/Button';
import { buttons, isSymbolAction, isSymbolOperator } from '../const/buttons';
import { ScreenResult } from '../components/Screen/Result';
import { ScreenCurrentOperation } from '../components/Screen/CurrentOperation';

export function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('0');

    const addSymbolToInput = (e: MouseEvent<HTMLButtonElement>) => {
        const symbol = e.currentTarget.value;
        if (isSymbolAction(symbol)) {
            // TODO
        } else if (isSymbolOperator(symbol) && !input) {
            setInput(0 + symbol);
        } else if (isSymbolOperator(symbol) && isSymbolOperator(input[input.length - 1])) {
            setInput((prevState) => prevState.slice(0, -1) + symbol);
        } else {
            setInput((prevState) => prevState + symbol);
        }
    };

    useEffect(() => {
        if (input && !isSymbolOperator(input[input.length - 1])) {
            setResult(format(evaluate(input), { precision: 10 }));
        }
    }, [input]);

    return (
        <Box
            sx={{
                bgcolor: 'white',
                borderRadius: 4,
                height: 568,
                width: 320,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
            }}
        >
            <ScreenCurrentOperation currentOperation={input} />
            <ScreenResult result={result} />
            <ButtonsContainer>
                {buttons.map((row) => (
                    <ButtonsRow key={row.reduce((res, button) => res + button.label.toString(), '')}>
                        {row.map(({ label, value, color }) => (
                            <CalculatorButton
                                key={label}
                                label={label}
                                value={value}
                                color={color}
                                handleClick={addSymbolToInput}
                            />
                        ))}
                    </ButtonsRow>
                ))}
            </ButtonsContainer>
        </Box>
    );
}
