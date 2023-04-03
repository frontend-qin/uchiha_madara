// export default defineComponent({
//   props: {
//     name: String,
//   },
//   setup(props) {
//     return () => <>Hello.tsx组件{props.name}</>;
//   },
// });

interface HelloProps {
  name: string;
}
export default function Hello(props: HelloProps) {
  return (
    <>
      HelloZuyjian
      <h1>{props.name}</h1>
    </>
  );
}
