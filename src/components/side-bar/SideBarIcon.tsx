'use client'

import { useSidebarStore } from '@/store/useSidebarStore';
import { Sidebar } from 'lucide-react'

const SideBarIcon = () => {
  const { open } = useSidebarStore();
  return (
    <button className='lg:hidden icon_hover relative group' onClick={open}>
      <Sidebar size={20} />
      <span className='tooltip'>Open Sidebar</span>
    </button>
  )
}

export default SideBarIcon
