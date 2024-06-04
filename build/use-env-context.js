"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEnvContext = exports.EnvContext = void 0;
const react_1 = require("react");
exports.EnvContext = (0, react_1.createContext)(null);
/**
 * Returns the environment variables from the context.
 *
 * Usage:
 * ```ts
 * const { NODE_ENV, API_URL } = useEnvContext();
 * ```
 */
const useEnvContext = () => {
    const context = (0, react_1.useContext)(exports.EnvContext);
    if (!context) {
        throw new Error("useEnvContext must be used within a EnvProvider or PublicEnvProvider");
    }
    return context;
};
exports.useEnvContext = useEnvContext;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWVudi1jb250ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3VzZS1lbnYtY29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsWUFBWSxDQUFDOzs7QUFFYixpQ0FBa0Q7QUFFckMsUUFBQSxVQUFVLEdBQUcsSUFBQSxxQkFBYSxFQUFDLElBQUksQ0FBQyxDQUFDO0FBRTlDOzs7Ozs7O0dBT0c7QUFDSSxNQUFNLGFBQWEsR0FBRyxHQUFHLEVBQUU7SUFDaEMsTUFBTSxPQUFPLEdBQUcsSUFBQSxrQkFBVSxFQUFDLGtCQUFVLENBQUMsQ0FBQztJQUV2QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDYixNQUFNLElBQUksS0FBSyxDQUNiLHNFQUFzRSxDQUN2RSxDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQVZXLFFBQUEsYUFBYSxpQkFVeEIifQ==