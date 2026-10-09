
export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-100 bg-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">

                <div className="text-center sm:text-left">
                    <p className="text-base ">
                        বাজার দর ― প্রয়োজনীয় পণ্যের দাম এক নজরে।
                    </p>
                </div>


                <p className="max-w-md text-center leading-6 sm:text-right">
                    সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                </p>
            </div>
        </footer>
    );
}