import { mutation } from "./_generated/server";

export const add = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (identity === null) {
      throw new Error("Unauthorized");
    }

    const userId = await ctx.db.insert("users", {
      name: "New User"
    });

    return userId;
  }
});
