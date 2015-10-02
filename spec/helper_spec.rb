RSpec.describe UsertimeRails::Helper do
  include UsertimeRails::Helper
  include ActionView::Helpers::TagHelper

  describe "#usertime_tag" do
    context "with Time object" do
      let(:time) { Time.parse('2015-09-01T09:28:27+00:00') }

      context "without format" do
        subject { usertime_tag(time) }
        it { should eq "<usertime>1441099707000</usertime>" }
      end

      context "with format" do
        subject { usertime_tag(time, :format => 'lll') }
        it { should eq '<usertime format="lll">1441099707000</usertime>' }
      end
    end

    context "with string" do
      let(:time) { '2015-09-01T09:28:27+00:00' }
      subject { usertime_tag(time) }
      it { should eq "<usertime>2015-09-01T09:28:27+00:00</usertime>" }
    end
  end
end
