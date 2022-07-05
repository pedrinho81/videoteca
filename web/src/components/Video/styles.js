import tw from 'tailwind-styled-components';

import {IoTrashBin, IoThumbsUp, IoPencil} from "react-icons/io5"

export const Container = tw.div`
bg-white
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

export const Title = tw.h1`
font-bold
text-2xl
`;

export const Link = tw.span`
border-l-2
border-l-zinc-500
max-w-[230px]
text-zinc-500
cursor-pointer

italic
self-start

whitespace-nowrap
overflow-hidden
text-ellipsis

hover:transition-opacity
hover:opacity-50
`;

export const ButtonArea = tw.div`
    w-full
    flex
    justify-evenly
`;

export const Button = tw.button`
hover:transition-transform
hover:-translate-y-1
hover:text-zinc-500

`;

export const LikeIcon = tw(IoThumbsUp)`
    ${({liked}) => (liked ? "text-blue-800" : "text-black")}
    w-6
    h-6
`;

export const EditIcon = tw(IoPencil)`
    w-6
    h-6
`;

export const DeleteIcon = tw(IoTrashBin)`
w-6
h-6
`;