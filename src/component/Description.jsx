import { useEffect, useState } from 'react';

function FadeInText() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`mt-3 p-2 text-lg text-gray-900 dark:text-slate-300 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <div className="mb-2 text-2xl font-semibold dark:text-slate-200 text-gray-900 sm:text-4xl">
        {/* introduction */}
        爬梯機計程車，無障礙移動的最佳選擇，助您輕鬆出行。
        <hr />
      </div>
      爬梯機計程車是一種專為無障礙移動設計的交通工具，特別適合行動不便者、老年人及使用輪椅的乘客。
      <br />
      它結合了傳統計程車的便利性與先進的爬梯機功能，可以輕鬆應對階梯、斜坡及其他地形挑戰，讓乘客安全、舒適地到達目的地。
      <br />
      爬梯機計程車配備專業駕駛員，他們接受過完整的無障礙服務訓練，確保每位乘客都能獲得貼心、周到的照顧。
      <br />
      車輛內部空間設計寬敞，具備固定裝置以穩定輪椅，並配備安全帶保障乘客安全。此外，車輛非常便利，無論是日常通勤、醫院探診，還是參加社交活動，爬梯機計程車都能為您提供無憂無慮的移動體驗，實現真正的無障礙出行。
      <br />
      讓爬梯機計程車成為您的安心旅伴，開啟更輕鬆自由的生活！
    </div>
  );
}

export default FadeInText;
