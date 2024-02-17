import { Button } from "@chakra-ui/react";

const CustomButton = ({ text, onClick, width }) => {
    return (
        <Button
            onClick={onClick}
            width={width}
            bg={'#FF0000'}
            color={'#fff'}
            borderRadius={'2rem'}
            fontSize={'1.12rem'}
            colorScheme={'red'}
            px={10}
            py={7}
            transition={'all .3s ease-in-out'}
        >
            {text}
        </Button>
    );
};

export default CustomButton;
