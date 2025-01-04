
"use client";

import { Button, Label, TextInput } from "flowbite-react";

export function ContactForm(setShowToast) {
  return (
    <form className="flex flex-wrap gap-4 sm:gap-6 items-end mt-6 pl-2">
      <div style={{ width: '500px' }}>
        <div className="mb-2 block">
          <Label className="text-base sm:text-xl font-semibold text-gray-900" htmlFor="name" value="姓名" />
        </div>
        <TextInput id="name" placeholder="請輸入姓名" required />
      </div>
      <div style={{ width: '500px' }}>
        <div className="mb-2 block">
          <Label className="text-base sm:text-xl font-semibold text-gray-900" htmlFor="phone-number" value="電話" />
        </div>
        <TextInput id="phone-number" placeholder="請輸入電話" required />
      </div>
      <Button style={{ height: 'min-content' }} className="justify-self-center" onClick={() => setShowToast((state) => !state)}>送出</Button>
    </form>
  );
}
