// File autogenerated by hexa.run on 2020-02-11T17:28:27.872Z
import { AzureFunction, Context, HttpRequest } from "@azure/functions";
const { generate } = require("./wasm_loader");

const func: AzureFunction = async function (context: Context, _req: HttpRequest): Promise<void> {
  try {
    const name: string = await generate();
    const [adjective, noun] = name.split(" ");
    console.log("generated name:", adjective, noun);

    context.res = {
      body: {
        adjective,
        noun,
      },
    };
  } catch (error) {
    console.log({error});
    
    context.res = {
      body: {
        error,
      },
    };
  }
};

export default func;
