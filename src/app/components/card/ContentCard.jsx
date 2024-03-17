'use client';

import { Card } from 'flowbite-react';
const content=[
    {
      "title":"លេងបិទពួនជាមួយ Searching Algorithm",
      "date":"16-May-2023 ",
      "image":"https://api.istad.co/media/image/e4a4d369-72c3-441c-9df1-23cc6e2ce3f7.jpg"
    },
    {
      "title":"ជជែកគ្នាលេងអំពី Web 4.0",
      "date":"24-Apr-2023 ",
      "image":"https://api.istad.co/media/image/53e118d6-58e3-4ec1-b40c-ef44f09c441e.jpg"
    },
    {
      "title":"តើអ្វីទៅជា Cybersecurity",
      "date":"12-Dec-2022",
      "image":"https://api.istad.co/media/image/779a9824-0e29-44ff-9f4c-922d78f04b1f.png"
    },
    {
      "title":"អ្វីដែលគួរត្រៀមសម្រាប់អ្នកចង់ចាប់អាជីព IT",
      "date":"23-Dec-2022 ",
      "image":"https://api.istad.co/media/image/83f77aa9-f5f6-4348-a8ce-14841721a561.png"
    },
    {
      "title":"សេចក្តីជូនដំណឹង ស្តីពីការប្រលងជ្រើសរើសនិស្សិតអាហារូបករណ៍ ",
      "date":"08-Dec-2022",
      "image":"https://api.istad.co/media/image/21a31c2d-181b-4ee0-aed9-61dfb8a09757.jpg"
    },
  ]
export default function ContentCardComponent() {
  return (
    <>
    {content.map((items) => (
<section className='flex'>
    <Card
      className="w-[270px] shadow-sm border-[0.5px] "
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={items.image}
    >
      <p className='font-light text-[12px]'>Blog</p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {items.title}
      </p>
    </Card>
    </section>
))}
    </>
  );
}