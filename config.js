/**
 * 微波炉火种众筹计划 — 与根目录正式站同源（可改 contractAddress 做镜像部署）。
 * BSC 主网 chainId 56；钱包 RPC；须同目录部署 vendor/、brand-mark.png。
 */
window.CROWDFUND_CONFIG = {
  contractAddress: "0x8e958C31BBcCe4bb55F33B5a5b992199db257D7B",
  chainId: 56,
  chainName: "BNB Smart Chain",
  /**
   * 横幅与 index.html 同目录。GitHub Pages 子路径可设 bannerBase，例如："/仓库名/test-version/"
   */
  bannerImages: ["banner-1.png", "banner-2.png", "banner-3.png"],
};
