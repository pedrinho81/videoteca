import tw from 'tailwind-styled-components'
import {IoClose, IoCheckmark} from 'react-icons/io5'

export const Overlay = tw.div`
bg-slate-50/75
fixed
right-0
top-0
bottom-0
left-0

flex
justify-center
items-center
`;
export const Container = tw.div`
bg-white
w-full
h-full
max-w-[400px]
mx-2
max-h-[400px]
py-12
px-8
rounded-md
flex 
flex-col
justify-between
shadow-xl
`;
export const Header = tw.div`
flex
justify-between
items-center
sm:text-xl

w-full
h-10
`;
export const FormContainer = tw.form`
h-full
w-full

flex
flex-col
justify-between
gap-4
`;
export const FormMain = tw.div`
flex
flex-col
gap-5
`;
export const InputGroup = tw.div`
flex 
flex-col
gap-1
sm:text-lg
`;
export const Input = tw.input`
bg-zinc-100
rounded-md
h-8
w-full
pl-3

`;
export const Footer = tw.div`
flex
justify-center
`;
export const Button = tw.button`
flex
justify-center
items-center

bg-green-300
hover:bg-green-200
transition-colors
rounded-md

w-28
h-9
`;
export const CheckIcon = tw(IoCheckmark)`
text-green-900
`;
export const CloseIcon = tw(IoClose)`
bg-red-300
hover:bg-red-200
transition-colors
rounded-full
text-red-900
`;