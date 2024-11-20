import dynamic from "next/dynamic";
import UpdateListing from "@/components/dashboard/update-listing";

export const metadata = {
  title: 'Create Listing || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <UpdateListing />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
