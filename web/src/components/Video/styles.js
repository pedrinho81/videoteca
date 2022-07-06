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
text-lg
text-center
max-w-[230px]

whitespace-wrap
overflow-hidden
text-ellipsis
`;

export const Link = tw.a`
border-l-2
pl-1
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
    ${({liked}) => (liked ? "text-black" : "text-blue-800")}
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