'use client'

import { useState } from 'react'
import { ChatBar } from '@/src/widgets/chat-bar'
import { ChatBody } from '@/src/widgets/chat-body'

export const DashboardPage: React.FC = () => {
  const [isOpenBar, setOpenBar] = useState<boolean>(false)

  const toggleBar = (): void => {
    setOpenBar(!isOpenBar)
  }

  const dt = new Date()

  return (
    <div className="flex">
      <ChatBar chats={[]} isOpenBar={isOpenBar} toggleBar={toggleBar} />
      <ChatBody
        chat={{
          owners: ['111', '222'],
          messages: [
            {
              ownerId: '1',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvsdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDOsdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDOsdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDOsdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDOsdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDOdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '1',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '1',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '1',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '1',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '1',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '1',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '1',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '1',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '1',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '1',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '1',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            },
            {
              ownerId: '2',
              ownerName: 'Jone',
              date: dt,
              text: 'sdajdhasdgugsdajnsdshbdiubdshbdiytsvdsvdTVFYISDCDIVUGSBDPIHSBSGVDO&SVDSTVDI&T'
            }
          ]
        }}
        isOpenBar={isOpenBar}
      />
    </div>
  )
}
