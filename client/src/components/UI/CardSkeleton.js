import Skeleton from "react-loading-skeleton";

const CardSkeleton = () => {
  return (
    <>
      <div className="w-full rounded-md border-gray-300 border-[1px]">
        <div className="flex items-center justify-center">
          <Skeleton width={"162px"} height={"162px"} />
        </div>
        <div className="p-6 pb-8 flex flex-col">
          <Skeleton width={"5rem"} />
          <Skeleton width={"10rem"} style={{ marginBottom: "0.6rem" }} />
          <Skeleton width={"5rem"} />
        </div>
      </div>
      <div className="w-full rounded-md border-gray-300 border-[1px]">
        <div className="flex items-center justify-center">
          <Skeleton width={"162px"} height={"162px"} />
        </div>
        <div className="p-6 pb-8 flex flex-col">
          <Skeleton width={"5rem"} />
          <Skeleton width={"10rem"} style={{ marginBottom: "0.6rem" }} />
          <Skeleton width={"5rem"} />
        </div>
      </div>
      <div className="w-full rounded-md border-gray-300 border-[1px]">
        <div className="flex items-center justify-center">
          <Skeleton width={"162px"} height={"162px"} />
        </div>
        <div className="p-6 pb-8 flex flex-col">
          <Skeleton width={"5rem"} />
          <Skeleton width={"10rem"} style={{ marginBottom: "0.6rem" }} />
          <Skeleton width={"5rem"} />
        </div>
      </div>
      <div className="w-full rounded-md border-gray-300 border-[1px]">
        <div className="flex items-center justify-center">
          <Skeleton width={"162px"} height={"162px"} />
        </div>
        <div className="p-6 pb-8 flex flex-col">
          <Skeleton width={"5rem"} />
          <Skeleton width={"10rem"} style={{ marginBottom: "0.6rem" }} />
          <Skeleton width={"5rem"} />
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;
