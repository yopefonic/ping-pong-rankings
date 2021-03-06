module PlayerHelper
  def create_ranker
    rank = 0
    last_rating = false
    skipped_ranks = 0
    lambda do |rating|
      if rating == last_rating
        skipped_ranks += 1
      else
        rank += skipped_ranks + 1
        skipped_ranks = 0
      end
      last_rating = rating
      rank
    end
  end

  def current_player
    return nil unless session[:player_id]
    @current_player ||= Player.where(id: session[:player_id]).first
  end
end
