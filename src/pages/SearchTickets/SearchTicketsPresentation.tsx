import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
    width: 100%;
    font-family: "Texturina", serif;
    margin-top: 30px;
    padding: 20px;
`;
const Icon = styled(FontAwesomeIcon)`
    font-size: 18px;
    margin: 0 20px;
    margin-top: 10px;
`;

const Box = styled.div`
    margin-top: 10px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Space = styled.div`
    margin-top: 5px;
`;
const List = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Item = styled.li`
    width: 80%;
    border: 1px solid white;
    background-color: #dfe6e9;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-template-rows: 1fr;
    gap: 20px;
    color: black;
`;
const Column = styled.div`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:nth-child(4) {
        justify-content: center;
    }
`;
const Button = styled.div`
    width: 150px;
    height: 40px;
    border-radius: 50px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    cursor: pointer;
    box-shadow: 3px 3px 3px grey, 0 0 5px grey;
    &:active {
        box-shadow: 0 0 5px grey, -3px -3px 3px grey;
    }
`;
const Text = styled.div``;
const SmallText = styled.div`
    font-size: 15px;
    position: relative;
    top: 15px;
    right: -15px;
`;
const Number = styled.div`
    width: 100%;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Total = styled.div`
    font-size: 12px;
    margin-top: 5px;
`;

const SearchTicketsPresenter: () => JSX.Element = () => {
    return (
        <Section>
            <List>
                <Item>
                    <Column>
                        <Text>Time</Text>
                        <Number>
                            <Text>8:30</Text>
                            <Box>
                                <Icon icon={faPlane} />
                                <Total>3d 9h</Total>
                            </Box>
                            <Text>17:18</Text>
                        </Number>
                    </Column>
                    <Column>
                        <Text>Price</Text>
                        <Space>
                            <Number>
                                <Text>1,750,000$</Text>
                            </Number>
                        </Space>
                    </Column>
                    <Column>
                        <Text>Avaialble</Text>
                        <Space>
                            <Number>
                                <Text>64</Text>
                                <SmallText>Seats</SmallText>
                            </Number>
                        </Space>
                    </Column>
                    <Column>
                        <Button>Buy Now</Button>
                    </Column>
                </Item>
            </List>
        </Section>
    );
};

export default SearchTicketsPresenter;
