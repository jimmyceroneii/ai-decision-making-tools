import Replicate from "replicate";

const main = async () => {
  const replicate = new Replicate();

  console.log("running the model...");

  const output = await replicate.run(
    "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
    {
      input: {
        prompt: "An astronaut riding a rainbow unicorn, cinematic, dramatic",
      },
    },
  );
  console.log(output);
};

main();
