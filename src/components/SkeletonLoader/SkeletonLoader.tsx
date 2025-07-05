import { SkeletonBox } from "./SkeletonLoader.styled";

export default function SkeletonLoader() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <SkeletonBox key={i} />
      ))}
    </>
  );
}
