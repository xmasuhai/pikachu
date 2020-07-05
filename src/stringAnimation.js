const stringAnimation = `
@keyframes shakeNose {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0);
  }
}

.face .nose-tip:hover {
  animation: shakeNose infinite 300ms linear;
  transform-origin: center bottom;
}
`;
export default stringAnimation;