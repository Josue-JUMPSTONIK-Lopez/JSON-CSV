import styled from "styled-components";

export const TextArea = styled.textarea`
    width: 100%;
    resize: none;
    margin-top: 10px;
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background: none repeat scroll 0 0 rgb(255, 250, 250);
    border-color: -moz-use-text-color #FFFFFF #FFFFFF -moz-use-text-color;
    border-image: none;
    border-radius: 6px 6px 6px 6px;
    border-style: none solid solid none;
    border-width: medium 1px 1px medium;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
    color: #555555;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 1em;
    line-height: 1.4em;
    padding: 5px 8px;
    transition: background-color 0.2s ease 0s;

    &:focus {
        background: none repeat scroll 0 0 #FFFFFF;
        outline-width: 0;
    }
`

