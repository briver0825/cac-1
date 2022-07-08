import mri from 'mri';
import { Command } from './Command';
import { Option, OptionConfig } from './Option';

class CAC {
  private globalCommand: Command;
  constructor() {
    this.globalCommand = new Command();
  }
  option(name: string, description: string, config?: OptionConfig) {
    this.globalCommand.option(name, description, config);
  }

  parse(rawArrs: string[]) {
    //1. 解析 rawArrs 从里面拿出值来
    //2. 从 globalCommand 里面拿出 option 去 rawArrs 里面有没有
    //3. 有的话 那么就赋值输出给 options
    //4. todo 没有的话 那么就进入到 args 里面
    const mriResult = mri(rawArrs);

    const options = this.globalCommand.options.reduce(
      (options, option: Option) => {
        const key =
          option.name in mriResult
            ? option.name
            : option.name.replace(/([A-Z])/, (_, $1) => `-${$1.toLowerCase()}`);
        options[option.name] = mriResult[key] || option.config.default;
        return options;
      },
      {}
    );

    return {
      args: [],
      options: {
        ...options,
        '--': [],
      },
    };
  }
}

export default CAC;
