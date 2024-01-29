function Exercise() {
  return (
    <div
      onPointerEnter={(e) => {
        console.log(e); // Event 객체 (합성 이벤트)
        console.log(e.nativeEvent); // Event 객체 (브라우저 이벤트)
        console.log(e.target);
        console.log(e.currentTarget);
      }}
    >
      Hover Me
    </div>
  );
}

export default Exercise;
