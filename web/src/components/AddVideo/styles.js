import tw from "tailwind-styled-components";

import {IoAdd} from "react-icons/io5"

export const AddVideoButton = tw.button`
border-4
border-dashed
border-white
bg-slate-200

p-3
h-52
w-64

rounded-md
shadow-md

flex 
flex-col
justify-evenly
items-center
`;

export const AddIcon = tw(IoAdd)`
    text-white
    w-16
    h-16
`;

