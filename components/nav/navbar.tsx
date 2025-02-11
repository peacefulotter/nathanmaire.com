import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { Book, Github, Home, HomeIcon, Inbox, School } from 'lucide-react'

const personalProjects = [
    {
        repo: 'pyro',
        desc: '🔥 Machine Learning framework allowing plug-and-play training for pytorch models. Lightweight and easy to use alternative to frameworks such as lightning. Provides checkpointing, callbacks, autocasting, recording metrics and logging statistics on WandB',
        language: ['python'],
        tags: ['machine-learning', 'pytorch'],
        links: [
            {
                icon: Github,
                url: 'https://github.com/peacefulotter/pyroml',
            },
        ],
    },
    {
        repo: 'self-driving-car',
        desc: '2D car simulation that learns to drive around a track using a neural network and genetic algorithm. This project has been built from scratch using the least libraries possible (JavaFX).',
        tags: ['machine-learning', 'neural-network', 'genetic-algorithm'],
        language: ['java'],
        links: [
            {
                icon: Github,
                url: 'https://github.com/peacefulotter/self-driving-car',
            },
        ],
    },
    {
        repo: 'leetcode',
        desc: 'Leetcode Problems in Scala using Functional Programming',
        tags: ['algorithms', 'functional-programming'],
        language: ['scala'],
        links: [
            {
                icon: Github,
                url: 'https://github.com/peacefulotter/leetcode',
            },
        ],
    },
    {
        repo: '3d-game-engine',
        desc: '3D Game Engine built from scratch using LWJGL (OpenGL) in Java. It is capable of loading and rendering 3D objects with textures, normals and height maps. The engine also supports multiple shaders as well as ambient, directional, point and spot lights.',
        tags: ['game-engine', 'LWJGL', 'OpenGL', 'GLSL'],
        language: ['java'],
        links: [
            {
                icon: Github,
                url: 'https://github.com/peacefulotter/3d-game-engine',
            },
        ],
    },
    {
        repo: 'mintel',
        desc: 'A 5-stage pipelined RISC microprocessor written in Scala using Chisel. Data dependencies are resolved using data forwarding and stalling occurs on a branch / jump. Mintel can be programmed on any FPGA and supports IOs. Additionally, a mips assembler was built in Scala for this project.',
        tags: ['RISC', 'MIPS', 'Chisel', 'pipeline', 'microprocessor', 'FPGA'],
        language: ['scala'],
        links: [
            {
                icon: Github,
                url: 'https://github.com/peacefulotter/mintel',
            },
        ],
    },
]

const academyProjects = [
    {
        repo: 'disco',
        desc: 'A 5-stage pipelined RISC microprocessor written in Scala using Chisel. Data dependencies are resolved using data forwarding and stalling occurs on a branch / jump. Mintel can be programmed on any FPGA and supports IOs. Additionally, a mips assembler was built in Scala for this project.',
        tags: ['RISC', 'MIPS', 'Chisel', 'pipeline', 'microprocessor', 'FPGA'],
        language: ['scala'],
        links: [
            {
                icon: Github,
                url: 'https://github.com/peacefulotter/disco',
            },
        ],
    },
]

const items = [
    {
        title: 'Home',
        url: '#',
        icon: Home,
    },
    {
        title: 'Contacts',
        url: '#contacts',
        icon: Inbox,
    },
    {
        title: 'Projects',
        url: '#projects',
        icon: Book,
        subgroup: [
            {
                url: 'personal',
                icon: HomeIcon,
                title: 'Personal',
                subsubgroup: personalProjects,
            },
            {
                url: 'academy',
                icon: School,
                title: 'Academy',
                subsubgroup: academyProjects,
            },
        ],
    },
]

export function Navbar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className='flex items-center gap-6'>
                    <p className='bg-foreground rounded-md text-background font-bold font-geist-mono px-4 py-2'>
                        NM
                    </p>
                    <p className='text-lg font-bold'>Welcome 👋</p>
                </div>
            </SidebarHeader>
            <SidebarContent className='pl-4'>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className='gap-2'>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                    {item.subgroup && (
                                        <SidebarMenuSub>
                                            {item.subgroup.map((sg) => (
                                                <SidebarMenuSubItem key={sg.title}>
                                                    <SidebarMenuSubButton>
                                                        <a href={`${item.url}/${sg.url}`}>
                                                            <span>{sg.title}</span>
                                                        </a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
