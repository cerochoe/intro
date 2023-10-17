import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between items-center p-6 sm:p-24">
      <div className="flex items-baseline w-full max-w-full sm:max-w-screen-lg justify-between border-b pb-4 pt-6 sm:pt-18">
        <div className="flex flex-col">
          <h1 className="text-4xl font-medium">Jeongbin Cero Choe</h1>
          <h3 className="text-xl font-light mt-2">anti-apple</h3>
        </div>
      </div>
      <div className="flex items-baseline w-full max-w-full sm:max-w-screen-lg justify-between border-t pt-3 pb-6 sm:pb-18">
        <p className="text-base font-light">2018-2023 CERO.KR</p>
      </div>
    </main>
  )
}
