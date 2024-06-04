"use strict";
/* eslint-disable no-bitwise */
/* eslint-disable prefer-template */
Object.defineProperty(exports, "__esModule", { value: true });
exports.bgWhite = exports.bgCyan = exports.bgMagenta = exports.bgBlue = exports.bgYellow = exports.bgGreen = exports.bgRed = exports.bgBlack = exports.gray = exports.white = exports.cyan = exports.purple = exports.magenta = exports.blue = exports.yellow = exports.green = exports.red = exports.black = exports.strikethrough = exports.hidden = exports.inverse = exports.underline = exports.italic = exports.dim = exports.bold = exports.reset = void 0;
// ISC License
// Copyright (c) 2021 Alexey Raspopov, Kostiantyn Denysov, Anton Verinov
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
//
// https://github.com/alexeyraspopov/picocolors/blob/b6261487e7b81aaab2440e397a356732cad9e342/picocolors.js#L1
const { env, stdout } = globalThis?.process ?? {};
const enabled = env &&
    !env.NO_COLOR &&
    (env.FORCE_COLOR || (stdout?.isTTY && !env.CI && env.TERM !== 'dumb'));
const replaceClose = (str, close, replace, index) => {
    const start = str.substring(0, index) + replace;
    const end = str.substring(index + close.length);
    const nextIndex = end.indexOf(close);
    return ~nextIndex
        ? start + replaceClose(end, close, replace, nextIndex)
        : start + end;
};
const formatter = (open, close, replace = open) => (input) => {
    const string = '' + input;
    const index = string.indexOf(close, open.length);
    return ~index
        ? open + replaceClose(string, close, replace, index) + close
        : open + string + close;
};
exports.reset = enabled ? (s) => `\x1b[0m${s}\x1b[0m` : String;
exports.bold = enabled
    ? formatter('\x1b[1m', '\x1b[22m', '\x1b[22m\x1b[1m')
    : String;
exports.dim = enabled
    ? formatter('\x1b[2m', '\x1b[22m', '\x1b[22m\x1b[2m')
    : String;
exports.italic = enabled ? formatter('\x1b[3m', '\x1b[23m') : String;
exports.underline = enabled ? formatter('\x1b[4m', '\x1b[24m') : String;
exports.inverse = enabled ? formatter('\x1b[7m', '\x1b[27m') : String;
exports.hidden = enabled ? formatter('\x1b[8m', '\x1b[28m') : String;
exports.strikethrough = enabled
    ? formatter('\x1b[9m', '\x1b[29m')
    : String;
exports.black = enabled ? formatter('\x1b[30m', '\x1b[39m') : String;
exports.red = enabled ? formatter('\x1b[31m', '\x1b[39m') : String;
exports.green = enabled ? formatter('\x1b[32m', '\x1b[39m') : String;
exports.yellow = enabled ? formatter('\x1b[33m', '\x1b[39m') : String;
exports.blue = enabled ? formatter('\x1b[34m', '\x1b[39m') : String;
exports.magenta = enabled ? formatter('\x1b[35m', '\x1b[39m') : String;
exports.purple = enabled
    ? formatter('\x1b[38;2;173;127;168m', '\x1b[39m')
    : String;
exports.cyan = enabled ? formatter('\x1b[36m', '\x1b[39m') : String;
exports.white = enabled ? formatter('\x1b[37m', '\x1b[39m') : String;
exports.gray = enabled ? formatter('\x1b[90m', '\x1b[39m') : String;
exports.bgBlack = enabled ? formatter('\x1b[40m', '\x1b[49m') : String;
exports.bgRed = enabled ? formatter('\x1b[41m', '\x1b[49m') : String;
exports.bgGreen = enabled ? formatter('\x1b[42m', '\x1b[49m') : String;
exports.bgYellow = enabled ? formatter('\x1b[43m', '\x1b[49m') : String;
exports.bgBlue = enabled ? formatter('\x1b[44m', '\x1b[49m') : String;
exports.bgMagenta = enabled ? formatter('\x1b[45m', '\x1b[49m') : String;
exports.bgCyan = enabled ? formatter('\x1b[46m', '\x1b[49m') : String;
exports.bgWhite = enabled ? formatter('\x1b[47m', '\x1b[49m') : String;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljb2NvbG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvcGljb2NvbG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0JBQStCO0FBQy9CLG9DQUFvQzs7O0FBRXBDLGNBQWM7QUFFZCx3RUFBd0U7QUFFeEUsMkVBQTJFO0FBQzNFLHlFQUF5RTtBQUN6RSxvRUFBb0U7QUFFcEUsMkVBQTJFO0FBQzNFLG1FQUFtRTtBQUNuRSwwRUFBMEU7QUFDMUUseUVBQXlFO0FBQ3pFLHdFQUF3RTtBQUN4RSwwRUFBMEU7QUFDMUUsaUVBQWlFO0FBQ2pFLEVBQUU7QUFDRiw4R0FBOEc7QUFFOUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxVQUFVLEVBQUUsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUVsRCxNQUFNLE9BQU8sR0FDWCxHQUFHO0lBQ0gsQ0FBQyxHQUFHLENBQUMsUUFBUTtJQUNiLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztBQUV6RSxNQUFNLFlBQVksR0FBRyxDQUNuQixHQUFXLEVBQ1gsS0FBYSxFQUNiLE9BQWUsRUFDZixLQUFhLEVBQ0wsRUFBRTtJQUNWLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUNoRCxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxPQUFPLENBQUMsU0FBUztRQUNmLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztRQUN0RCxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRixNQUFNLFNBQVMsR0FDYixDQUFDLElBQVksRUFBRSxLQUFhLEVBQUUsT0FBTyxHQUFHLElBQUksRUFBRSxFQUFFLENBQ2hELENBQUMsS0FBYSxFQUFFLEVBQUU7SUFDaEIsTUFBTSxNQUFNLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsT0FBTyxDQUFDLEtBQUs7UUFDWCxDQUFDLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLO1FBQzVELENBQUMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUM1QixDQUFDLENBQUM7QUFFUyxRQUFBLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDL0QsUUFBQSxJQUFJLEdBQUcsT0FBTztJQUN6QixDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLENBQUM7SUFDckQsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNFLFFBQUEsR0FBRyxHQUFHLE9BQU87SUFDeEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixDQUFDO0lBQ3JELENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDRSxRQUFBLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUM3RCxRQUFBLFNBQVMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNoRSxRQUFBLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUM5RCxRQUFBLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUM3RCxRQUFBLGFBQWEsR0FBRyxPQUFPO0lBQ2xDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ0UsUUFBQSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDN0QsUUFBQSxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDM0QsUUFBQSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDN0QsUUFBQSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDOUQsUUFBQSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDNUQsUUFBQSxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDL0QsUUFBQSxNQUFNLEdBQUcsT0FBTztJQUMzQixDQUFDLENBQUMsU0FBUyxDQUFDLHdCQUF3QixFQUFFLFVBQVUsQ0FBQztJQUNqRCxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ0UsUUFBQSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDNUQsUUFBQSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDN0QsUUFBQSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDNUQsUUFBQSxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDL0QsUUFBQSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDN0QsUUFBQSxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDL0QsUUFBQSxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDaEUsUUFBQSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDOUQsUUFBQSxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDakUsUUFBQSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDOUQsUUFBQSxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMifQ==